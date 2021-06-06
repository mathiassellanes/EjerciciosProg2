package Logica;

public class Jugadores extends Usuarios {
private int puntaje;
private String respuestasResp;
public Jugadores(int puntaje, String respuestasResp ,int ci, String nombre) {
	super(ci, nombre);
	this.puntaje = puntaje;
	this.respuestasResp = respuestasResp;
}
public int getPuntaje() {
	return puntaje;
}
public void setPuntaje(int puntaje) {
	this.puntaje = puntaje;
}
public String getRespuestasResp() {
	return respuestasResp;
}
public void setRespuestasResp(String respuestasResp) {
	this.respuestasResp = respuestasResp;
}



}
