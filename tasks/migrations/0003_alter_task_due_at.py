# Generated by Django 3.2.20 on 2023-08-31 15:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0002_auto_20230831_1503'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='due_at',
            field=models.DateField(blank=True, null=True),
        ),
    ]