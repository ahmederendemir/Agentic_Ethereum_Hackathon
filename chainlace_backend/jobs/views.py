from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import User, Job, Hire
from .serializers import UserSerializer, JobSerializer, HireSerializer

@api_view(['POST'])
def login_or_register(request):
    wallet_address = request.data.get('wallet_address')
    if not wallet_address:
        return Response({"error": "Wallet address is required"}, status=status.HTTP_400_BAD_REQUEST)
    
    user, created = User.objects.get_or_create(wallet_address=wallet_address)
    return Response(UserSerializer(user).data)

@api_view(['GET', 'POST'])
def job_list(request):
    if request.method == 'GET':
        jobs = Job.objects.all()
        serializer = JobSerializer(jobs, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = JobSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def hire_user(request):
    serializer = HireSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
