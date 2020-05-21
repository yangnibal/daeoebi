from .models import Student, CheckedStudent
from rest_framework import serializers

class StudentSerializer(serializers.ModelSerializer):
    owner = serializers.CharField(source='owner.username', read_only=True)
    id = serializers.CharField(read_only=True)
    class Meta:
        model = Student
        fields = ['name', 'grade', 'group', 'owner', 'id']

class CheckedStudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = CheckedStudent
        fields = ['name', 'grade', 'group']