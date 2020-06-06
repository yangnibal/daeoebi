# Generated by Django 3.0.6 on 2020-06-05 14:47

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('groups', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Student',
            fields=[
                ('name', models.CharField(max_length=5)),
                ('grade', models.CharField(choices=[('초1', '초1'), ('초2', '초2'), ('초3', '초3'), ('초4', '초4'), ('초5', '초5'), ('초6', '초6'), ('중1', '중1'), ('중2', '중2'), ('중3', '중3'), ('고1', '고1'), ('고2', '고2'), ('고3', '고3')], max_length=2)),
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('group', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='groups.Group')),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
