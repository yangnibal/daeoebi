from django.shortcuts import render
from .models import Group
from .serializers import GroupSerializer
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response

class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer