# 基盤となるnginxの公式イメージを使用
FROM nginx:latest

# プロジェクト内のnginx.confをコンテナ内の/etc/nginx/nginx.confにコピー
COPY nginx.conf /etc/nginx/nginx.conf

# 空のindex.html（またはコンテンツがあるindex.html）をコンテナ内の静的ファイルの場所にコピー
COPY ./html /usr/share/nginx/html

# コンテナの80番ポートを公開
EXPOSE 80
