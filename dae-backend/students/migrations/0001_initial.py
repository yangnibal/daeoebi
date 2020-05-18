# Generated by Django 3.0.6 on 2020-05-18 08:29

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('groups', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Student',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=5)),
                ('grade', models.CharField(choices=[('E1', 'E1'), ('E2', 'E2'), ('E3', 'E3'), ('E4', 'E4'), ('E5', 'E5'), ('E6', 'E6'), ('M1', 'M1'), ('M2', 'M2'), ('M3', 'M3'), ('H1', 'H1'), ('H2', 'H2'), ('H3', 'H3')], max_length=2)),
                ('group', models.ManyToManyField(default=None, to='groups.Group')),
            ],
        ),
    ]
