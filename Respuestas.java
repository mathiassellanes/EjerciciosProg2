package Logica;

public class Respuestas extends preguntas{
private int cantidad;
private String enunciado;
public Respuestas(String enunciadoPreg, int cantidad, String enunciado) {
	super(enunciadoPreg);
	this.cantidad = cantidad;
}
public int getCantidad() {
	return cantidad;
}
public void setCantidad(int cantidad) {
	this.cantidad = cantidad;
}
public String getEnunciado() {
	return enunciado;
}
public void setEnunciado(String enunciado) {
	this.enunciado = enunciado;
}

}
