from django.contrib import admin
from django.urls import path, include
from django.views.generic.base import TemplateView
from django.contrib.auth.decorators import login_required

from django.contrib.auth import views as auth_views


urlpatterns = [
    path('', TemplateView.as_view(template_name='home.html'), name='home'),
    path('dashboard/', login_required(TemplateView.as_view(template_name='dashboard.html')), name='dashboard'),
    path('profile/', login_required(TemplateView.as_view(template_name='profile.html')), name='profile'),
    path('courses/', login_required(TemplateView.as_view(template_name='courses.html')), name='courses'),
    path('explore/', login_required(TemplateView.as_view(template_name='explore.html')), name='explore'),

    path('code/', login_required(TemplateView.as_view(template_name='code.html')), name='code'),
    path('practice/', TemplateView.as_view(template_name='practice.html'), name='practice'),

    path('admin/', admin.site.urls),
    # path('users/', include('users.urls')),
    # path('users/', include('django.contrib.auth.urls')),
    path('users/signup', auth_views.LoginView.as_view(
        template_name='signup.html',
        extra_context={ 

            # option 1: provide full path
            'next': '/dashboard/', 

            # option 2: just provide the name of the url
            # 'next': 'dashboard',  
        },
    ), name='signup'),
    path('users/login', auth_views.LoginView.as_view(
        template_name='registration/login.html',
        extra_context={ 

            # option 1: provide full path
            'next': '/dashboard/', 

            # option 2: just provide the name of the url
            # 'next': 'dashboard',  
        },
    ), name='login'),
    path('users/logout', auth_views.LogoutView.as_view(
        extra_context={ 

            # option 1: provide full path
            'next': '/', 

            # option 2: just provide the name of the url
            # 'next': 'custom_url_name',  
        },
    ), name='logout'),
    path(
        'change-password/', auth_views.PasswordChangeView.as_view(
        	template_name='change-password.html',
            extra_context={ 

            # option 1: provide full path
            # 'next': '/', 

            # option 2: just provide the name of the url
            'next': 'login',  
            }, 
    ), name='password_reset'),
]
