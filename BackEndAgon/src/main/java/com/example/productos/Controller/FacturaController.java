package com.example.productos.Controller;

import com.example.productos.Model.Factura;
import com.example.productos.Service.FacturaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/factura")
public class FacturaController {

    @Autowired
    private FacturaService facturaService;

    @GetMapping("/obtener")
    public List<Factura> getAllFacturas(){
        return facturaService.getAllFacturas();
    }
    @PostMapping("/agregar")

    public Factura addFactura(@RequestBody Factura factura){
        return facturaService.addFactura(factura);
    }

    @DeleteMapping("/{id}")

    public void deleteFacturaById(@PathVariable Long id){
        facturaService.deleteFacturaById(id);
    }
}
