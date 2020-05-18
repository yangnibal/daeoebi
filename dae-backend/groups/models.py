from django.db import models

class Group(models.Model):
    SEMESTER_CHOICES = (
        ('M1_1_M', 'M1_1_M'),
        ('M1_1_F', 'M1_1_F'),
        ('M1_2_M', 'M1_2_M'),
        ('M1_2_F', 'M1_2_F'),

        ('M2_1_M', 'M2_1_M'),
        ('M2_1_F', 'M2_1_F'),
        ('M2_2_M', 'M2_2_M'),
        ('M2_2_F', 'M2_2_F'),

        ('M3_1_M', 'M3_1_M'),
        ('M3_1_F', 'M3_1_F'),
        ('M3_2_M', 'M3_2_M'),
        ('M3_2_F', 'M3_2_F'),

        ('H1_1_M', 'H1_1_M'),
        ('H1_1_F', 'H1_1_F'),
        ('H1_2_M', 'H1_2_M'),
        ('H1_2_F', 'H1_2_F'),
        
        ('H1_1_M', 'H1_1_M'),
        ('H1_1_F', 'H1_1_F'),
        ('H1_2_M', 'H1_2_M'),
        ('H1_2_F', 'H1_2_F'),

        ('H2_1_M', 'H2_1_M'),
        ('H2_1_F', 'H2_1_F'),
        ('H2_2_M', 'H2_2_M'),
        ('H2_2_F', 'H2_2_F'),
        
        ('H3_1_M', 'H3_1_M'),
        ('H3_1_F', 'H3_1_F'),
        ('H3_2_M', 'H3_2_M'),
        ('H3_2_F', 'H3_2_F'),
    )
    name = models.CharField(max_length=20)
    semester = models.CharField(max_length=10, choices=SEMESTER_CHOICES)
    subject = models.CharField(max_length=10)
    score = models.CharField(max_length=10)
