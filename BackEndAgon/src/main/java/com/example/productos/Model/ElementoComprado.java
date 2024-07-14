package com.example.productos.Model;

import jakarta.persistence.*;

@Entity
@Table(name="elementos_comprados")
public class ElementoComprado {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)//notacion que dice al id cómo generarse, puede ser de manera automática, autoincrental
    private Long Id;

    @Column(name="cantidad", nullable = false)
    private int cantidad;
    @Column(name="precio_total", nullable = false)
    private int precioTotal;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "factura_id", nullable = false)
    private Factura factura;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "producto_id", nullable = true)
    private Producto producto;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "servicio_id", nullable = true)
    private Servicio servicio;

    public ElementoComprado(Long id, int cantidad, int precioTotal, Factura factura, Producto producto, Servicio servicio) {
        Id = id;
        this.cantidad = cantidad;
        this.precioTotal = precioTotal;
        this.factura = factura;
        this.producto = producto;
        this.servicio = servicio;
    }

    public ElementoComprado() {
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public int getCantidad() {
        return cantidad;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }

    public int getPrecioTotal() {
        return precioTotal;
    }

    public void setPrecioTotal(int precioTotal) {
        this.precioTotal = precioTotal;
    }

    public Factura getFactura() {
        return factura;
    }

    public void setFactura(Factura factura) {
        this.factura = factura;
    }

    public Producto getProducto() {
        return producto;
    }

    public void setProducto(Producto producto) {
        this.producto = producto;
    }

    public Servicio getServicio() {
        return servicio;
    }

    public void setServicio(Servicio servicio) {
        this.servicio = servicio;
    }
}
