package com.example.productos.Model;

import jakarta.persistence.*;

import java.sql.Date;
import java.util.List;

@Entity
@Table(name="facturas")
public class Factura {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)//notacion que dice al id cómo generarse, puede ser de manera automática, autoincrental
    private Long Id;

    @Column(name="fecha", nullable = false)
    private Date fecha;

    @Column(name="total", nullable = false)
    private int total;

    @OneToMany(mappedBy = "factura")
    private List<ElementoComprado> elementosComprados;

    public Factura() {
    }

    public Factura(Long id, Date fecha, List<ElementoComprado> elementosComprados) {
        Id = id;
        this.fecha = fecha;
        this.elementosComprados = elementosComprados;
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public List<ElementoComprado> getElementosComprados() {
        return elementosComprados;
    }

    public void setElementosComprados(List<ElementoComprado> elementosComprados) {
        this.elementosComprados = elementosComprados;
    }

    public int getTotal() {
        return total;
    }

    public void setTotal(int total) {
        this.total = total;
    }
}
