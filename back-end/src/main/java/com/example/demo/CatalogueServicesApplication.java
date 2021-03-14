package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

import com.example.demo.DAO.ProduitRepository;
import com.example.demo.entities.Produit;

@SpringBootApplication
public class CatalogueServicesApplication implements CommandLineRunner {

	@Autowired
	private RepositoryRestConfiguration restConfiguration;
	@Autowired
	private ProduitRepository produitRepository;
	
	public static void main(String[] args) {
		SpringApplication.run(CatalogueServicesApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
	//	produitRepository.save(new Produit("Produit winner 1", 6000, 100));
	//	produitRepository.save(new Produit("Produit winner 2", 6000, 100));
	//	produitRepository.save(new Produit("Produit winner 3", 6000, 100));

		restConfiguration.exposeIdsFor(Produit.class);
		produitRepository.findAll().forEach(p->{
			System.out.println(p.toString());
		});
	}

}
