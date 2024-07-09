package com.example.productos.Repository;

import com.example.productos.Model.ElementoComprado;
import com.example.productos.Model.Factura;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ElementoCompradoRepository extends JpaRepository<ElementoComprado, Long>{
}
