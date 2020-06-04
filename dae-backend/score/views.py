from django.shortcuts import render
from .models import Score
from tests.models import Test
from tests.serializers import TestSerializer
from students.models import Student
from .serializers import ScoreSerializer
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .getrank import *

class ScoreViewSet(viewsets.ModelViewSet):
    queryset = Score.objects.all()
    serializer_class = ScoreSerializer

    def create(self, request):
        serializer = ScoreSerializer(data=request.data['data'], many=True)
        #import pdb;pdb.set_trace()
        #test = Test.objects.get(id=request.data['data'][0]['test_id'])
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=False, list=True, methods=['POST'])
    def getlist(self, request):
        data = request.data['data']
        test = Test.objects.get(id=data[0]['test'])
        #import pdb; pdb.set_trace()
        for i in range(len(data)):
            serializer = ScoreSerializer(data=data[i])
            student = Student.objects.get(name=data[i]['student'])
            percent = getPercent(data[i]['score'], test.average, test.std_dev)
            percent = round(percent, 1)
            rank = getRank(percent, test.cand_num)
            rank = int(round(rank, 0))
            if(rank==0): rank=1
            rating = getRating(percent)
            z = getZ(data[i]['score'], test.average, test.std_dev)
            prob_dens = getProbDens(z)
            try:
                score = Score.objects.get(student=student, test=test)

            except Score.DoesNotExist:
                if serializer.is_valid():
                    serializer.save(percent=percent, rank=rank, rating=rating, test=test, student=student, z=z, prob_dens=prob_dens, owner=request.user)
                    test.student.add(student)
        return Response(status=status.HTTP_201_CREATED)

    @action(detail=False, list=True, methods=['GET'])
    def getmyscore(self, request):
        score = Score.objects.filter(owner=request.user)
        serializer = ScoreSerializer(score, many=True)
        return Response(serializer.data)

    @action(detail=False, list=True, methods=['POST'])
    def getstdscore(self, request):
        student = Student.objects.get(id=request.data['id'])
        score = Score.objects.filter(student=student)
        test = Test.objects.filter(student=student)
        serializer = ScoreSerializer(score, many=True)
        testserializer = TestSerializer(test, many=True)
        data = {'score': serializer.data, 'test': testserializer.data}
        return Response(data)

    @action(detail=False, list=True, methods=['POST'])
    def findscore(self, request):
        #import pdb;pdb.set_trace()
        student = Student.objects.get(id=request.data['id'])
        test = Test.objects.filter(student=student)
        if request.data['grade'] is not "":
            test = test.filter(grade=request.data['grade'])
        if request.data['test_type'] is not "":
            test = test.filter(test_type=request.data['test_type'])
        if request.data['subject'] is not "":
            test = test.filter(subject=request.data['subject'])
        testserializer = TestSerializer(test, many=True)
        score = Score.objects.filter(test__in=test, student=student)
        serializer = ScoreSerializer(score, many=True)
        data = {'score': serializer.data, 'test': testserializer.data}
        return Response(data)

    @action(detail=False, list=True, methods=['POST'])
    def gettestscore(self, request):
        test = Test.objects.get(id=request.data['test_id'])
        score = Score.objects.filter(owner=request.user, test=test)
        serializer = ScoreSerializer(score, many=True)
        return Response(serializer.data)