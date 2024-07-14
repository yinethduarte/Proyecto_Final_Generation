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
    @Column(name="correo_electronico", nullable = false)
    private String correoElectronico;
    @Column(name="tipo_check", nullable = false)
    private Boolean tipoCheck;
    @Column(name="nombre", nullable = false)
    private String nombre;
    @Column(name="apellido", nullable = false)
    private String apellido;
    @Column(name="documento_identidad", nullable = false)
    private String documentoIdentidad;
    @Column(name="direccion", nullable = false)
    private String direccion;
    @Column(name="detalles_direccion", nullable = false)
    private String detallesDireccion;
    @Column(name="ciudad", nullable = false)
    private String ciudad;
    @Column(name="telefono", nullable = false)
    private String telefono;


    @OneToMany(mappedBy = "factura", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ElementoComprado> elementosComprados;

    public Factura() {
    }

    public Factura(Long id, Date fecha, int total, String correoElectronico, Boolean tipoCheck, String nombre, String apellido, String documentoIdentidad, String direccion, String detallesDireccion, String ciudad, String telefono) {
        Id = id;
        this.fecha = fecha;
        this.total = total;
        this.correoElectronico = correoElectronico;
        this.tipoCheck = tipoCheck;
        this.nombre = nombre;
        this.apellido = apellido;
        this.documentoIdentidad = documentoIdentidad;
        this.direccion = direccion;
        this.detallesDireccion = detallesDireccion;
        this.ciudad = ciudad;
        this.telefono = telefono;
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

    public int getTotal() {
        return total;
    }

    public void setTotal(int total) {
        this.total = total;
    }

    public String getCorreoElectronico() {
        return correoElectronico;
    }

    public void setCorreoElectronico(String correoElectronico) {
        this.correoElectronico = correoElectronico;
    }

    public Boolean getTipoCheck() {
        return tipoCheck;
    }

    public void setTipoCheck(Boolean tipoCheck) {
        this.tipoCheck = tipoCheck;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getDocumentoIdentidad() {
        return documentoIdentidad;
    }

    public void setDocumentoIdentidad(String documentoIdentidad) {
        this.documentoIdentidad = documentoIdentidad;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getDetallesDireccion() {
        return detallesDireccion;
    }

    public void setDetallesDireccion(String detallesDireccion) {
        this.detallesDireccion = detallesDireccion;
    }

    public String getCiudad() {
        return ciudad;
    }

    public void setCiudad(String ciudad) {
        this.ciudad = ciudad;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public List<ElementoComprado> getElementosComprados() {
        return elementosComprados;
    }

    public void setElementosComprados(List<ElementoComprado> elementosComprados) {
        this.elementosComprados = elementosComprados;
    }
}
