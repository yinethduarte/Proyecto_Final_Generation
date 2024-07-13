package com.example.productos.Model;

import jakarta.persistence.*;

@Entity
@Table(name= "productos")
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)//notacion que dice al id cómo generarse, puede ser de manera automática, autoincrental
    private Long Id;

    @Column(name="nombre", nullable = false)
    private String nombre;
    @Column(name="precio", nullable = false)
    private int precio;
    @Column(name="descripcion", nullable = false)
    private String descripcion;
    @Column(name="unidades_disponibles", nullable = false)
    private int unidades_disponibles;
    @Column(name="imagen", nullable = false)
    private String imagen;
    @Column(name="categoria", nullable = false)
    private String categoria;

    public Producto() {
    }

    public Producto(Long id, String nombre, int precio, String descripcion, int unidades_disponibles, String imagen, String categoria) {
        Id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.unidades_disponibles = unidades_disponibles;
        this.imagen = imagen;
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

    public int getUnidades_disponibles() {
        return unidades_disponibles;
    }

    public void setUnidades_disponibles(int unidades_disponibles) {
        this.unidades_disponibles = unidades_disponibles;
    }

    public String getImagen() {
        return imagen;
    }

    public void setImagen(String imagen) {
        this.imagen = imagen;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }
}
