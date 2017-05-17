
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Formatter;
import java.util.Locale;

import javax.naming.InitialContext;
import javax.naming.NamingException;

import ejb.*;

public class Main {
	
	private static String SHAsum(String s){
	    byte[] convertme=s.getBytes();
		
		MessageDigest md=null;
		try {
			md = MessageDigest.getInstance("SHA-1");
		} catch (NoSuchAlgorithmException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} 
	    
	    
	    Formatter formatter = new Formatter();
	    for (byte b :convertme) {
	        formatter.format("%02x", b);
	    }
	    
	    String res=formatter.toString();
	    
	    formatter.close();
	    return res;
	    
	}


	
	private static final String MATERIALFOLDER="/home/bata/Uni/downloaded/";
	
	/**
	 * @param args
	 * @throws NamingException 
	 * @throws ParseException 
	 * @throws IOException 
	 * @throws InterruptedException 
	 */
	@SuppressWarnings("deprecation")
	public static void main(String[] args) throws NamingException, ParseException, IOException, InterruptedException {
		
		System.out.println(System.getProperty("os.name"));
		
		System.out.println(SHAsum("cenas"));
		
		
		InitialContext ic=new InitialContext();
		
		Path path = Paths.get(MATERIALFOLDER+"cenas.txt");
		byte[] data = Files.readAllBytes(path);
		
		AdminBeanLocal adminbean = (AdminBeanLocal) 
				ic.lookup("ISproj2-EAR/ISproj2-EJB/AdminBean!ejb.AdminBeanLocal");
		
		ProfessorBeanLocal profbean=(ProfessorBeanLocal)
				ic.lookup("ISproj2-EAR/ISproj2-EJB/ProfessorBean!ejb.ProfessorBeanLocal");
		
		GeneralBeanLocal generalbean=(GeneralBeanLocal)
				ic.lookup("ISproj2-EAR/ISproj2-EJB/GeneralBean!ejb.GeneralBeanLocal");
		
		adminbean.deletePerson("joao@student.uc.pt");adminbean.deletePerson("jose@professor.uc.pt");
		
		
		adminbean.createProfessor("josoe",
				new SimpleDateFormat("dd/MM/yyyy",Locale.ENGLISH).parse("10/10/1991"), "ali",
				"josoe@professor.uc.pt",
				"jose@gmail.com",
				"917810929", 
				"cenas", 
				"989282", "catedratico", "acola", "91188181", 1010010.0);
		
		adminbean.createProfessor("jose",
				new SimpleDateFormat("dd/MM/yyyy",Locale.ENGLISH).parse("10/10/1991"), "ali",
				"jose@professor.uc.pt",
				"jose@gmail.com",
				"917810929", 
				"cenas", 
				"989282", "catedratico", "acola", "91188181", 1010010.0);
		
		adminbean.createStudent("joao",
				new SimpleDateFormat("dd/MM/yyyy",Locale.ENGLISH).parse("10/10/1991"),
				"aqui",
				"joao@student.uc.pt",
				"joao@gmail.com","19191919",
				"cenas", "91911919", 2000);
		
		
		adminbean.createCourse("Sistemas Operativos");
		adminbean.changeCourseProfessor("Sistemas Operativos", "josoe@professor.uc.pt");
		
		profbean.addMaterial("josoe@professor.uc.pt", "Sistemas Operativos", "cenas.txt", data);
		
		adminbean.addStudentToCourse("Analise", "");
		adminbean.addStudentToCourse("Sistemas Operativos", "joao@student.uc.pt");
		
		//adminbean.deletePerson("joao@student.uc.pt");
		
		adminbean.deleteCourse("Sistemas Operativos");
		
		Thread.sleep(5000);
		
		adminbean.removeStudentFromCourse("Sistemas Operativos", "joao@student.uc.pt");
		
		ArrayList<String> mats=generalbean.getMaterialNames("Sistemas Operativos");
		
		for(String s:mats){
			System.out.println(s);
		}
		
		ic.close();
	}

}


