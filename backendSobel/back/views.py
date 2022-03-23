import os
from rest_framework.views import APIView
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile
from rest_framework.serializers import ValidationError
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.conf import settings
from django.http import HttpResponse, FileResponse
from .serializers import ImageSerializer


# Create your views here.

class Home(APIView):
    def get(self, request):
        return Response(data={'msg': 'hello'})

    def post(self, request):
        data = request.data
        print(data)
        return Response(data={})


@api_view(['POST', ])
def imageView(request):
    data = request.data
    print(data)
    serializer = ImageSerializer(data=request.data)
    if serializer.is_valid():
        data = serializer.data
        img = request.data['image']
        path = default_storage.save('tmp/{}'.format(img), ContentFile(img.read()))
        tmp_file = os.path.join(settings.MEDIA_ROOT, path)
        return FileResponse(open(tmp_file, 'rb'), content_type='image/png')

    else:
        data = serializer.errors
    print(data)

    return Response(data=data)
