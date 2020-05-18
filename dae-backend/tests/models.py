from django.db import models
from students.models import Student

class Test(models.Model):
    GRADE_CHOICES = (
        ("E1", "E1"),
        ("E2", "E2"),
        ("E3", "E3"),
        ("E4", "E4"),
        ("E5", "E5"),
        ("E6", "E6"),
        ("M1", "M1"),
        ("M2", "M2"),
        ("M3", "M3"),
        ("H1", "H1"),
        ("H2", "H2"),
        ("H3", "H3")
    )
    grade = models.CharField(max_length=2, choices=GRADE_CHOICES)
    test_type = models.CharField(max_length=10)
    subject = models.CharField(max_length=10)
    average = models.CharField(max_length=10)
    std_dev = models.CharField(max_length=20)
    cand_num = models.CharField(max_length=20)
    additional_info = models.TextField()
    student = models.ManyToManyField(Student, default=None)

