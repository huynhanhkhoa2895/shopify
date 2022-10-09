FROM ubuntu/nginx
RUN   apt update && apt install -y curl vim sudo
RUN  curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash - && \
    cat /etc/apt/sources.list.d/nodesource.list && \
    sudo apt -y install nodejs
ADD ./script.sh /home/script.sh
RUN chmod +x /home/script.sh
#ENTRYPOINT ["/home/script.sh"]