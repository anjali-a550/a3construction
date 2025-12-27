from django.urls import path
from . import views

urlpatterns= [
    path('',views.index,name='index'),
    path('about/', views.about, name='about'),
    path('services/', views.services, name='services'),
    path('projects/', views.projects, name='projects'),
   
    path('contact/', views.contact, name='contact'),
    path('register/', views.register, name='register'),
    path('login/', views.login_view, name='login'),

  
    path('logout/', views.logout_view, name='logout'),
    
    path('resources/', views.resource_list, name='resources'),
   
    
]


