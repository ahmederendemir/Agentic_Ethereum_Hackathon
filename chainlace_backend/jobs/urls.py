from django.urls import path
from .views import login_or_register, job_list, hire_user

urlpatterns = [
    path('login/', login_or_register, name="login"),
    path('jobs/', job_list, name="job-list"),
    path('hire/', hire_user, name="hire-user"),
]
