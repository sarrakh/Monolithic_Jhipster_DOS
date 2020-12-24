package tn.isi.monoapp;

import com.tngtech.archunit.core.domain.JavaClasses;
import com.tngtech.archunit.core.importer.ClassFileImporter;
import com.tngtech.archunit.core.importer.ImportOption;
import org.junit.jupiter.api.Test;

import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.noClasses;

class ArchTest {

    @Test
    void servicesAndRepositoriesShouldNotDependOnWebLayer() {

        JavaClasses importedClasses = new ClassFileImporter()
            .withImportOption(ImportOption.Predefined.DO_NOT_INCLUDE_TESTS)
            .importPackages("tn.isi.monoapp");

        noClasses()
            .that()
                .resideInAnyPackage("tn.isi.monoapp.service..")
            .or()
                .resideInAnyPackage("tn.isi.monoapp.repository..")
            .should().dependOnClassesThat()
                .resideInAnyPackage("..tn.isi.monoapp.web..")
        .because("Services and repositories should not depend on web layer")
        .check(importedClasses);
    }
}
