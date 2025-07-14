#define TRIG_PIN 2
#define ECHO_PIN 3

void setup() {
  Serial.begin(9600);
  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);
}

void loop() {
  digitalWrite(TRIG_PIN, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);

  long duration = pulseIn(ECHO_PIN, HIGH);
  long distance = duration * 0.034 / 2;

  if (distance < 10) {
    // Send a signal to the p5.js sketch to trigger scent generation
    Serial.println("TRIGGER");
    delay(60000); // Delay for 60 seconds
  } else {
    // Send a signal to p5.js to display "Come take a sniff?"
    Serial.println("WAIT");
  }

  delay(500); // Small delay for stability
}
