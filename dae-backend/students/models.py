from django.db import models
from groups.models import Group

class Student(models.Model):
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
    name = models.CharField(max_length=5)
    grade = models.CharField(max_length=2, choices=GRADE_CHOICES)
    group = models.ManyToManyField(Group, default=None)
