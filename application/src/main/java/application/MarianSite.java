package application;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.context.ApplicationContextException;

@SpringBootApplication
public class MarianSite {

    public static void main(String[] args) {
        try {
            new SpringApplicationBuilder(MarianSite.class).run(args);
        } catch (ApplicationContextException e) {
            System.exit(1);
        }
    }
}