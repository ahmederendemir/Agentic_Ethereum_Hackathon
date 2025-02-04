from rest_framework import serializers
from .models import User, Job, Hire

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = '__all__'

class HireSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hire
        fields = '__all__'
