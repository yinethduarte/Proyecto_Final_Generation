package com.example.productos.Service;

import com.example.productos.Model.Servicio;
import com.example.productos.Repository.ServicioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServicioService {
    @Autowired

    private ServicioRepository servicioRepository;

    public List<Servicio> getAllServicio(){
        return servicioRepository.findAll();

    }

    public Servicio addServicio(Servicio servicio){
        return servicioRepository.save(servicio);
    }

    public  void deleteServicioById(Long id){
        servicioRepository.deleteById(id);

    }
}
