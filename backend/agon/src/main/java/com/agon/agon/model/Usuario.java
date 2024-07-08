package com.agon.agon.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

@Entity
@Table(name="usuarios")
public class Usuario {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long Id_usuario;
   @Column(name = "nombre_usuario", nullable = false)
   private String nombre_usuario;

    @Column(name = "apellido_usuario", nullable = false)
    private String apellido_usuario;

    @Column(name = "telefono_usuario", nullable = false)
    private double telefono_usuario;

    @Column(name = "correo_usuario", nullable = false)
    private String correo_usuario;

    public Usuario() {
    }

    public Usuario(Long id_usuario, String nombre_usuario, String apellido_usuario, double telefono_usuario, String correo_usuario) {
        Id_usuario = id_usuario;
        this.nombre_usuario = nombre_usuario;
        this.apellido_usuario = apellido_usuario;
        this.telefono_usuario = telefono_usuario;
        this.correo_usuario = correo_usuario;
    }

}
