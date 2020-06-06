# Generated by Django 3.0.6 on 2020-06-05 14:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('groups', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Video',
            fields=[
                ('name', models.CharField(max_length=20)),
                ('link', models.TextField()),
                ('iframe', models.TextField()),
                ('subject', models.CharField(max_length=10)),
                ('grade', models.CharField(max_length=5)),
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('group', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='groups.InfGroup')),
            ],
        ),
    ]