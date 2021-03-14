package com.example.demo.entities;

import org.springframework.data.rest.core.config.Projection;

@Projection(name = "P1",types = Produit.class)
public interface ProduitProjetion {

	public double getPrice();
	public String getDesignation();
}
