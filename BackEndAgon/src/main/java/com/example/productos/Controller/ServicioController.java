package com.example.productos.Controller;

import com.example.productos.Model.Servicio;
import com.example.productos.Service.ServicioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/servicio")
public class ServicioController {
    @Autowired
    private ServicioService servicioService;

    @GetMapping("/obtener")
    public List<Servicio> getAllServicio(){
        return servicioService.getAllServicio();
    }
    @PostMapping("/agregar")

    public Servicio addServicio(@RequestBody Servicio servicio){
        return servicioService.addServicio(servicio);
    }

    @DeleteMapping("/{id}")

    public void deleteServicioById(@PathVariable Long id){
        servicioService.deleteServicioById(id);
    }
}
