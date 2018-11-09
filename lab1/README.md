# Imagen de Laboratorio 1

## Construir imagen

Ejecute el comando `docker build` como se indica a continuación.

```bash
docker build -t lab1 .
```

## Crear contenedor

Una vez que la imagen esté creada podemos ejecutar nuestro contenedor con el comando `docker run`:

```bash
docker run -d --name=lab1 -p 3000:3000 lab1
```

> Parametros Docker run
> 
> - `-d`: Ejecuta como demonio el contenedor para que se ejecute por segundo plano.
> - `--name=lab1`: Asocia un nombre al contenedor creado.
> - `-p`: Mapea el puerto del contenedor para que sea visible en el host anfitrion: `<puerto-anfitrion>:<puerto-interno>`.

## Logs del contenedor

Para visualizar los logs debe ejecutar el siguiente comando

```bash
docker logs -f lab1
```

## Borrar contenedor

Cuando termine de hacer la prueba puede proceder a eliminar el contenedor:

```bash
docker rm -f lab1
```