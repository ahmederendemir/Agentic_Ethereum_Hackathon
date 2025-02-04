from django.contrib import admin
from .models import User, Job, Hire

@admin.register(Job)
class JobAdmin(admin.ModelAdmin):
    list_display = ('title',)  

admin.site.register(User)
admin.site.register(Hire)
