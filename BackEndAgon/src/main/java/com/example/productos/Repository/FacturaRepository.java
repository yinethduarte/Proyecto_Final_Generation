package com.example.productos.Repository;

import com.example.productos.Model.Factura;
import com.example.productos.Model.Servicio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FacturaRepository extends JpaRepository<Factura, Long>{
}
