from django.db import models

class User(models.Model):
    wallet_address = models.CharField(max_length=42, unique=True)

    def __str__(self):
        return self.wallet_address

class Job(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()

    def __str__(self):
        return self.title

class Hire(models.Model):
    employer = models.ForeignKey(User, on_delete=models.CASCADE, related_name="employer")
    employee = models.ForeignKey(User, on_delete=models.CASCADE, related_name="employee")
    job = models.ForeignKey(Job, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.employer} hired {self.employee} for {self.job.title}"
