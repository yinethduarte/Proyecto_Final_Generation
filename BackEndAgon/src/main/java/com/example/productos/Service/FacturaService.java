package com.example.productos.Service;

import com.example.productos.Model.ElementoComprado;
import com.example.productos.Model.Factura;
import com.example.productos.Model.Servicio;
import com.example.productos.Repository.ElementoCompradoRepository;
import com.example.productos.Repository.FacturaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FacturaService {
    @Autowired
    private FacturaRepository facturaRepository;
    @Autowired
    private ElementoCompradoRepository elementoCompradoRepository;

    public List<Factura> getAllFacturas(){
        return facturaRepository.findAll();

    }

    public Factura addFactura(Factura factura){
        if(factura.getElementosComprados() != null){
            for (ElementoComprado elemento : factura.getElementosComprados()) {
                elemento.setFactura(factura);
            }
        }
        return facturaRepository.save(factura);
    }

    public  void deleteFacturaById(Long id){
        facturaRepository.deleteById(id);

    }
}
