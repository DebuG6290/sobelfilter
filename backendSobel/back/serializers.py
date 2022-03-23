from abc import ABC

from rest_framework import serializers

from .utils import FileValidator


class ImageSerializer(serializers.Serializer):
    image = serializers.ImageField(
        max_length=128,
        allow_empty_file=False,
        validators=[FileValidator(content_types=('image/png', 'image/jpg', 'image/jpeg'), max_size=10 * 1024 * 1024)],
    )

    class Meta:
        fields = '__all__'
