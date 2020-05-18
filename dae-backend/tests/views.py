from django.shortcuts import render
from .models import Test
from .serializers import TestSerializer
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response

class TestViewSet(viewsets.ModelViewSet):
    queryset = Test.objects.all()
    serialzer_class = TestSerializer
