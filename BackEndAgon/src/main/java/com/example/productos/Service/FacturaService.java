package com.example.productos.Service;

import com.example.productos.Model.Factura;
import com.example.productos.Model.Servicio;
import com.example.productos.Repository.FacturaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FacturaService {
    @Autowired
    private FacturaRepository facturaRepository;

    public List<Factura> getAllFacturas(){
        return facturaRepository.findAll();

    }

    public Factura addFactura(Factura factura){
        //falta logica para que se guarde
        return facturaRepository.save(factura);
    }

    public  void deleteFacturaById(Long id){
        facturaRepository.deleteById(id);

    }
}
