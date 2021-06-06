package Logica;

import java.time.LocalDate;

public class Administradores extends Usuarios{
	private LocalDate fecha;

	public Administradores(int ci, String nombre, LocalDate fecha) {
		super(ci, nombre);
		this.fecha = fecha;
	}

	public LocalDate getFecha() {
		return fecha;
	}

	public void setFecha(LocalDate fecha) {
		this.fecha = fecha;
	}
	
}
