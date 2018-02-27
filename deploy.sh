#!/bin/bash
set -e

# export CLOUDSDK_COMPUTE_ZONE=us-central1-a
# export CLOUDSDK_COMPUTE_REGION=REGION

# gcloud beta compute instances create-with-container \
#     abc-in-class-server-vm \
#     --container-image kylecordes/abc-in-class-server

gcloud beta compute instances update-container \
    abc-in-class-server-vm \
    --container-image kylecordes/abc-in-class-server

# https://cloud.google.com/compute/docs/containers/configuring-options-to-run-containers

# gcloud beta compute instances create-with-container nginx-vm \
#     --container-image gcr.io/cloud-marketplace/google/nginx1:1.12 \
#     --tags http-server
