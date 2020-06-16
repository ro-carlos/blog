FROM centos:latest
MAINTAINER NewstarCorporation
RUN yum -y install httpd
COPY app -r /var/www/html/
CMD [“/usr/sbin/httpd”, “-D”, “FOREGROUND”]
EXPOSE 80