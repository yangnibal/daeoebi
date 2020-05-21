from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import Student, CheckedStudent
from .serializers import StudentSerializer, CheckedStudentSerializer

class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

    def create(self, request):
        serializer = StudentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(owner=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=False, list=True, methods=['GET'])
    def getmystd(self, request):
        mystd = Student.objects.filter(owner=request.user)
        serializer = StudentSerializer(mystd, many=True)
        return Response(serializer.data)

class CheckedStudentViewSet(viewsets.ModelViewSet):
    queryset = CheckedStudent.objects.all()
    serializer_class = CheckedStudentSerializer

    @action(detail=False, list=True, methods=['POST'])
    def postdatalist(self, request):
        is_many = isinstance(request.data, list)
        if is_many:
            serializer = self.get_serializer(data=request.data['data'], many=True)
            if serializer.is_valid():
                serializer.save(owner=request.user)
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else :
            serializer = CheckedStudentSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save(owner=request.user)
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=False, list=True, methods=['GET'])
    def getmystd(self, request):
        mystd = Student.objects.filter(owner=request.user)
        serializer = StudentSerializer(mystd, many=True)
        return Response(serializer.data)