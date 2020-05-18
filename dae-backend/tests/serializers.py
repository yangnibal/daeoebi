from .models import Test
from rest_framework import serializers

class TestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Test
        fields = ['grade', 'test_type', 'subject', 'average', 'std_dev', 'cand_num', 'additional_info', 'student']