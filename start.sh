# script para Iniciar con docker automaticamente en linux
# Parar el container
sudo docker container stop calc-react
sudo docker container rm calc-react

#Correr el container
sudo docker-compose -f docker-compose.prod.yml up --build -d
# Mensaje del que contenedor paro
echo "calc-react esta corriendo"