from django.shortcuts import render

# Create your views here.
from rest_framework import status
from rest_framework.generics import ListAPIView, RetrieveAPIView, UpdateAPIView, get_object_or_404
from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet

from .serializers import UserModelSerializer
from .models import User


# class UserModelViewSet(ModelViewSet):
#     queryset = User.objects.all()
#     serializer_class = UserModelSerializer

class UserAPIView(APIView):
    def get(self, request,  format=None):
            pk = request.query_params.get('pk')
            user = User.objects.all()
            if pk:
                user = user.filter(id=pk)
            serializer = UserModelSerializer(user, many=True)
            return Response(serializer.data)

    def put(self, request, pk, format=None):
        user = get_object_or_404(User.objects.all(), pk=pk)
        serializer = UserModelSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # def post(self, request, format=None):
    #     serializer = UserModelSerializer(data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data, status=status.HTTP_201_CREATED)
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


