package org.tampasa.kettles;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.tampasa.kettles.models.User;
import org.tampasa.kettles.models.data.UserRepository;

import java.util.stream.Stream;

@SpringBootApplication
public class KettlesApplication {

	public static void main(String[] args) {
		SpringApplication.run(KettlesApplication.class, args);
	}

//	@Bean
//	CommandLineRunner init(UserRepository userRepository) {
//		return args -> {
//			Stream.of("John", "Julie", "Jennifer", "Helen", "Rachel").forEach(name -> {
//				User user = new User(name, name.toLowerCase() + "@domain.com");
//				userRepository.save(user);
//			});
//			userRepository.findAll().forEach(System.out::println);
//		};
//	}

}
