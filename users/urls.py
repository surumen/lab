from django.urls import path
from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^signup/$', views.SignUp.as_view(), name='signup'),
	# ex: /compile/
	url(r'^compile/$', views.compileCode, name='compile'),
	# ex: /run/
	url(r'^run/$', views.runCode, name='run'),
	# ex: /code=ajSkHb/
	url(r'(?P<code_id>\w{0,50})/$', views.savedCodeView, name='saved-code'),
]
