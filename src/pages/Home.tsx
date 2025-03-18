import React from "react";
import ActionButton from "../components/HomePage/ActionButton";
import FeatureCard from "../components/HomePage/FeatureCard";
import StepCircle from "../components/HomePage/StepCircle";
import Footer from "../components/HomePage/Footer";
import { useModal } from "../components/ModalPopUp/ModalOperations";
import {
  ArrowRight,
  Dumbbell,
  BarChart3,
  LineChart,
  PieChart,
} from "lucide-react";
import styles from "../components/HomePage/Home.module.css";

function Home() {
  const { toggleRegisterModal } = useModal();

  return (
    <div className={styles.app}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>
                Design Your{" "}
                <span className={styles.heroHighlight}>Fitness Journey</span>
              </h1>
              <p className={styles.heroDescription}>
                Create, customize, and track your workouts with an intuitive,
                beautifully designed fitness experience that adapts to your
                goals.
              </p>
              <div className={styles.buttonGroup}>
                <ActionButton variant="primary">
                  Create Workout <ArrowRight size={16} />
                </ActionButton>
                <ActionButton variant="secondary">
                  Browse Exercises
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Everything you need to reach your fitness goals
            </h2>
            <p className={styles.sectionDescription}>
              Our intuitive platform combines powerful features with beautiful
              design to make your fitness journey seamless.
            </p>
          </div>

          <div className={styles.featuresGrid}>
            <FeatureCard
              icon={<Dumbbell size={32} className={styles.heroHighlight} />}
              title="Custom Workouts"
              description="Design your own workouts or choose from our collection of professional templates."
            />
            <FeatureCard
              icon={<LineChart size={32} className={styles.heroHighlight} />}
              title="Exercise Library"
              description="Access hundreds of exercises with detailed instructions and video demonstrations."
            />
            <FeatureCard
              icon={<BarChart3 size={32} className={styles.heroHighlight} />}
              title="Progress Tracking"
              description="Track your performance and see your improvements over time with detailed analytics."
            />
            <FeatureCard
              icon={<PieChart size={32} className={styles.heroHighlight} />}
              title="Goal Setting"
              description="Set and track personal fitness goals with smart reminders and progress insights."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className={styles.howItWorksSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>How It Works</h2>
            <p className={styles.sectionDescription}>
              Getting started with FitnessPro is easy and intuitive. Follow
              these simple steps to begin your fitness journey.
            </p>
          </div>

          <div className={styles.stepsContainer}>
            <div className={styles.stepItem}>
              <StepCircle number={1} />
              <h3 className={styles.stepTitle}>Create Your Profile</h3>
              <p className={styles.stepDescription}>
                Set up your personal profile and goals to get a customized
                fitness experience.
              </p>
            </div>

            <div className={styles.stepItem}>
              <StepCircle number={2} />
              <h3 className={styles.stepTitle}>Browse Exercises</h3>
              <p className={styles.stepDescription}>
                Explore our extensive library of exercises categorized by muscle
                groups and difficulty levels.
              </p>
            </div>

            <div className={styles.stepItem}>
              <StepCircle number={3} />
              <h3 className={styles.stepTitle}>Track Your Progress</h3>
              <p className={styles.stepDescription}>
                Record your workouts and monitor your progression with detailed
                analytics and insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>
            Ready to start your fitness journey?
          </h2>
          <p className={styles.ctaDescription}>
            Join thousands of users who have revolutionized their workout
            experience with our intuitive platform.
          </p>
          <ActionButton variant="primary" onClick={toggleRegisterModal}>
            Get Started <ArrowRight size={16} />
          </ActionButton>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
