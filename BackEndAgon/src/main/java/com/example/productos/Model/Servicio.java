package com.example.productos.Model;

import jakarta.persistence.*;

@Entity
@Table(name="servicios")
public class Servicio {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)//notacion que dice al id cómo generarse, puede ser de manera automática, autoincrental
    private Long Id;

    @Column(name="nombre", nullable = false)
    private String nombre;
    @Column(name="precio", nullable = false)
    private int precio;
    @Column(name="descipcion", nullable = false)
    private String descripcion;
    @Column(name="duracion_video", nullable = true)
    private String duracion_video;
    @Column(name="imagen", nullable = true)
    private String imagen;
    @Column(name="video", nullable = true)
    private String video;
    @Column(name="categoria", nullable = false)
    private String categoria;

    public Servicio() {
    }

    public Servicio(Long id, String nombre, int precio, String descripcion, String duracion_video, String imagen, String video, String categoria) {
        Id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.duracion_video = duracion_video;
        this.imagen = imagen;
        this.video = video;
        this.categoria = categoria;
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getPrecio() {
        return precio;
    }

    public void setPrecio(int precio) {
        this.precio = precio;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getDuracion_video() {
        return duracion_video;
    }

    public void setDuracion_video(String duracion_video) {
        this.duracion_video = duracion_video;
    }

    public String getImagen() {
        return imagen;
    }

    public void setImagen(String imagen) {
        this.imagen = imagen;
    }

    public String getVideo() {
        return video;
    }

    public void setVideo(String video) {
        this.video = video;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }
}
